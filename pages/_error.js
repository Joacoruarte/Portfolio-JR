import Layout from "../components/Layout";

const _error = ({statusCode}) => {
    return ( 
        <Layout> 
            <p className="text-center">Could not load your page Status Code : {statusCode}.</p>
        </Layout>
    )
}

export default _error