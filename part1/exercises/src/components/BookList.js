export default function BookList() {
   let pageTitle = "Newly Released Books";
   let book1 = "https://nypost.com/wp-content/uploads/sites/2/2020/09/the-manor-house.jpg?resize=1022,1536&quality=75&strip=all";
   let book2 = "https://covers3.booksamillion.com/covers/bam/1/64/937/406/1649374062_w.jpg";
   let book3 = "https://covers2.booksamillion.com/covers/bam/1/25/089/031/1250890314_w.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Manor House" width={200}/>
         <img src={book2} alt="Star Bringer" width={201} />
         <img src={book3} alt="Wolfsong" width={195}/>
      </div>      
   );
}