import DashboardContainer from './components/Container';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard',
}

export interface DashboardProps { }

const Dashboard: FC<DashboardProps> = () => {
  return <DashboardContainer />
}

export default Dashboard;