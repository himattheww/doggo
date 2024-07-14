const styles = {
  container: {
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
  },
  sectionTitle: {
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  cardMedia: {
    height: '180px',
  },
  cardContent: {
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  productName: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: '1rem',
  },
};

export default styles;
