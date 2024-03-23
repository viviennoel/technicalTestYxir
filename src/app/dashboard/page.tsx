import ControlBar from '@/app/_components/organisms/ControlBar/ControlBar';
import WidgetArea from '@/app/_components/organisms/WidgetArea/WidgetArea';
import { Widgets } from '@/app/_utils/types/components';

const Dashboard = () => {
  const widgetsArray: Widgets[] = Object.values(Widgets);

  return (
    <div>
      <ControlBar />
      <WidgetArea />
    </div>
  );
};

export default Dashboard;
