
// Separated into own module for cleanliness

function HomepageFooter({styles}) {
  return (
    <div className={styles['footer-div']}>
          <div className={styles['links-div']}>
            <h3>Creator</h3>
            <ul>
              <li>
                <a href="https://github.com/eltonbautista" target="_blank" 
                   rel="noopener noreferrer">Github</a>
                </li>
              <li>
                <a href="https://twitter.com/psychtotech" target="_blank" 
                   rel="noopener noreferrer">Twitter</a>
                </li>
              <li>
                <a href="https://www.linkedin.com/in/elton-bautista-496a011ab/" target="_blank" 
                   rel="noopener noreferrer">LinkedIn</a>
                </li>
            </ul>
          </div>

          <div className={styles['links-div']}>
            <h3>Company</h3>
            <ul>
              <li><button>About</button></li>
              <li><button>Contact Us</button></li>
              <li><button>Careers</button></li>
              <li><button>Privacy Policy</button></li>
              <li><button>Terms & Conditions</button></li>
            </ul>
          </div>
          <div className={styles['links-div']}>
          <h3>Service</h3>
            <ul>
              <li><button>Shipping Methods</button></li>
              <li><button>Returns & Exchanges</button></li>
            </ul>
          </div>
        </div>
  )
};

export default HomepageFooter;