import { collection } from "../constants/dashboard.js";
import Sidebar from "../components/Sidebar";
import CollectionData from "../components/CollectionData";
import CurrentProgress from "../components/CurrentProgress.jsx";
import LocalityMap from "../components/LocalityMap.jsx";
const AdminDashboard = () => {
  return (
    <main>
      <div className="flex h-screen">
        <Sidebar />
        <div className="px-8">
          <p className="text-3xl text-black/45 py-4 font-semibold">
            Current Overview
          </p>
          <div className="flex gap-6">
            <CurrentProgress progress={30} /> <CurrentProgress progress={30} /> 
          </div>
          <div className="pt-6"><LocalityMap /></div>

          <div>
            <p className="text-lg py-4 font-bold text-green-700">
              Collection Stats
            </p>
            <div className="grid grid-cols-5 bg-gray-200 text-gray-500 font-bold px-20 gap-32 p-4">
              <p className="pl-14">Route #</p>
              <p>Truck #</p>
              <p>Staff</p>
              <p className="">Garbage collected</p>
              <p>Completion</p>
            </div>
            <CollectionData data={collection} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
