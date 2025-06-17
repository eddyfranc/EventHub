import Notifications from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Event from "@mui/icons-material/Event";


function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center bg-[#e7edf4] p-4">
        <Event />

        <div>
          <ul className="flex justify-between items center gap-5">
            <li>Explore</li>
            <li>Create</li>
            <li> 
              <Notifications />
            </li>
            <li>
              <AccountCircle />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
