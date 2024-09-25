import '../../src/index.css'
function Footer(){
return(
    <div className="footer bg-cyan-600">
       <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDB)" width="130" height="94"></img> 
        <div style={{display:'flex',padding:'10px'}}>
            <ul >
                   <li> <b>TEMEL</b></li>
                   <li> TMDB Hakkında</li>
                   <li> Destek Form</li>
                   <li> API</li>
                
            </ul>
            <ul>
                 <li><b>KATKIDA BULUN</b></li>
                  <li>Katılım Başvuru Kitab</li>
                 <li>Yeni Film Ekle</li>
                  <li>Dizi Ekle</li>
                
            </ul>
            <ul>
                <li><b>TOPLULUK</b></li>
                 <li>Yönergeler</li>
                <li>Tartışmalar</li>
                 <li>Öne Çıkanlar</li>
               
           </ul>
        </div>
    </div>
)
}

export default Footer