import Head from "next/head";
import Header from "../components/header";
import Banner from "../components/Banner";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      
      {/* Header */}
       <Header /> 

       <main className='max-w-screen-2xl mx-auto'>
         {/*Banner */}
          <Banner />
         {/* Product Feed */}
       </main>
    </div>
  );
}
