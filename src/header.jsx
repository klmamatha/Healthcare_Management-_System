import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Header = () => {
  return (
   
      
    <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
             <div className="container">    
                <a to="/" className="navbar-brand text-info">
                <i className="fa fa-suitcase fa-lg " aria-hidden="true"></i> Vydehi
                </a>
                <button
                className="navbar-toggler me-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
                aria-controls="mynavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <div className="d-flex">
                    <button
                        className="btn  me-4 ms-5  text-light "
                        style={{
                            padding: '5px 10px',
                            marginRight: '20px',
                            backgroundColor: '#00aaa1',
                            border: '2px solid #00aaa1',
                            borderRadius: '10px',
                            animation: 'blinker 2s linear infinite',
                            cursor: 'pointer',
                        }}
                        type="button"
                        >
                        PET/CT Scan
                    </button>

                    <button className="btn btn-outline-secondary me-4" type="button">
                    Health Check
                    </button>
                    <button className="btn btn-outline-secondary me-4" type="button">
                    Emergency Medicine
                    </button>
                    <button className="btn btn-outline-secondary me-4" type="button">
                    Book Video Consultation
                    </button>
                    
                </div>
                </div>
                </div>
            </nav>
           

  );
};

export default Header;
