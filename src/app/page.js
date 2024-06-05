import Image from "next/image";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Posts from "./components/posts"; 


export default function Home() {
  return (
    <div className="page">
      <Header/>
      <Posts/>
      <Footer/>
    </div>
  );
}
