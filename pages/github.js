import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({user , statusCode}) =>  {

  if(statusCode){ 
    return <Error statusCode={statusCode}/>
  }

  return (
  <Layout dark={false} footer={false}>
    <div className="row"> 
      <div className="col-md-4 offset-md-4"> 
        <div className="card card-body text-center">
          <h1>{user.name}</h1> 
          <img src={user.avatar_url} alt={user.login} /> 
          <p>{user.bio}</p> 
          <a href={user.html_url} target="_blank" className="btn btn-outline-secondary my-2">Go to github</a>
        </div>
      </div>
    </div>
  </Layout>
); 
}

export async function getServerSideProps(){ 

  const res = await fetch("https://api.github.com/users/Joacoruarte") 
  const data = await res.json()  

  const statusCode = res.status > 200 ? res.status : false;
  return{ 
    props: { 
      user: data ,
      statusCode
    }
  }
}

export default Github;
