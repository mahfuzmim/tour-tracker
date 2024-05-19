import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

function AppLayout() {
  return (
    <>
      <section className="flex 	">
        <Sidebar />
        <Map />
      </section>
    </>
  );
}

export default AppLayout;
