import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'bulma/css/bulma.min.css';
import '../css/style.css';
import { Page, Text, View, Document, Image, StyleSheet, pdf } from '@react-pdf/renderer';
import PDFModal from '../revistas/PDFModal';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

const defaultImage = 'https://via.placeholder.com/150';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  author: {
    fontSize: 14,
    marginBottom: 10
  },
  description: {
    fontSize: 12,
    marginBottom: 10
  },
  image: {
    marginBottom: 10
  }
});

const Computacion = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://revistadigital.onrender.com/api/computacion`);
        setNews(response.data);
        setLoading(false); // Termina la carga cuando los datos se han obtenido
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Termina la carga incluso si hay un error
      }
    };

    fetchData();
  }, []);

  const openModal = (url) => {
    setPdfUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setPdfUrl('');
    setModalIsOpen(false);
  };

  const MyDocument = ({ news }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{news?.titulo}</Text>
        <Text style={styles.author}>Autor: {news?.autor}</Text>
        <Image style={styles.image} src={news?.img || defaultImage} />
        <Text style={styles.description}>{news?.descripcion}</Text>
        <Text style={styles.description}>{news?.parrafo1}</Text>
        <Text style={styles.description}>{news?.parrafo2}</Text>
        <Text style={styles.description}>{news?.parrafo3}</Text>
      </Page>
    </Document>
  );

  useEffect(() => {
    if (selectedNews) {
      openPdfInNewTab(selectedNews);
    }
  }, [selectedNews]);

  const openPdfInNewTab = async (news) => {
    const blob = await pdf(<MyDocument news={news} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const cardStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '300px',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    objectFit: 'contain'
  };

  return (
    <section className="hero" style={{ backgroundColor: '#000000', padding: '10px 0', minHeight: '70vh' }}>
      <div className="hero-body">
        <div className="container has-text-centered">
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <TailSpin color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="title has-text-white" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                Articulos de Computación
              </h1>
              <div className="columns is-multiline is-centered">
                {news && news.map((article, index) => (
                  <div key={index} className="column is-one-third">
                    <div className="card" style={cardStyle} onClick={() => openModal(article.url)}>
                      <img
                        src={article.img || defaultImage}
                        alt={article.titulo}
                        style={imageStyle}
                      />
                      <h3 style={{ marginTop: '15px', fontSize: '1.2rem' }}>{article.titulo}</h3>
                      <PDFModal isOpen={modalIsOpen} onClose={closeModal} pdfUrl={pdfUrl}/>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Computacion;
