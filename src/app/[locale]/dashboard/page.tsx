import DashboardContainer from './components/Container';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard',
}

function getUserRole(role: any){
  switch (role) {
      case 'candidato':
          return <DashboardContainer />;
      case 'empresa':
          return <DashboardContainer />;
      case 'abc':
          return <DashboardContainer />;
      default:
          return ;
  }
}

export interface DashboardProps { }

const Dashboard: FC<DashboardProps> = () => {
  return <DashboardContainer />
}

export default Dashboard;