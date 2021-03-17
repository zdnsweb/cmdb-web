import { useRedirect } from 'react-admin';

const Dashboard = () => {
    const redirect = useRedirect();
    redirect('/assets');
    return null;
};

export default Dashboard;
