import Layout from "../components/Layout";
import { skills } from "../profile"; 
const Skills = () => (
  <Layout footer={false}> 
    <div className="row"> 
      <div className="col-md-12 text-center"> 
        <h1 style={{fontWeight: "400"}}>Skills</h1>
        <p>These are some of the major languages, technologies, tools and platforms I have worked with:</p>
      </div>
      <div className="col-md-12 text-center">  
        <h1>Front-end</h1>
        <div className="d-md-inline-flex">
          <div className="col"> 
            <img src={`/${skills[0].image}`} alt={skills[0].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[0].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[1].image}`} alt={skills[1].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[1].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[2].image}`} alt={skills[2].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[2].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[3].image}`} alt={skills[3].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[3].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[4].image}`} alt={skills[4].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[4].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[5].image}`} alt={skills[5].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[5].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[6].image}`} alt={skills[6].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[6].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[7].image}`} alt={skills[7].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[7].skill}</h5>
          </div> 
        </div>
      </div>
      <div className="col-md-12 text-center"> 
        <h1>Back-end</h1> 
        <div className="d-md-inline-flex">
          <div className="col"> 
            <img src={`/${skills[8].image}`} alt={skills[8].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[8].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[9].image}`} alt={skills[9].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[9].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[10].image}`} alt={skills[10].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[10].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[11].image}`} alt={skills[11].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[11].skill}</h5>
          </div> 
        </div>
      </div>
      <div className="col-md-12 text-center"> 
        <h1>Others</h1> 
        <div className="d-md-inline-flex">
          <div className="col"> 
            <img src={`/${skills[12].image}`} alt={skills[12].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[12].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[13].image}`} alt={skills[13].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[13].skill}</h5>
          </div> 
          <div className="col"> 
            <img src={`/${skills[14].image}`} alt={skills[14].skill} style={{height: "75px" , width: "75px"}}/>
            <h5>{skills[14].skill}</h5>
          </div> 
        </div>
      </div>
    </div>
  </Layout>
);

export default Skills;
