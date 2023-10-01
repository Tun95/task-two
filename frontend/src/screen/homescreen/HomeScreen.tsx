import { useState } from "react";
import data, { opportunity } from "../../components/data/data";
import HomeList from "../../components/home/main/HomeList";
import HomeNav from "../../components/home/nav/HomeNav";
import SideFilter from "../../components/home/side filter/SideFilter";
import "./styles.scss";

interface User {
  firstName: string;
  lastName: string;
  location: string;
  school: string;
  hashtags: string[];
  tags: string[];
  qualified: boolean;
  disqualified: boolean;
}

function HomeScreen() {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const qualifiedUsers: User[] = data.filter((user) => user.qualified);
  const disqualifiedUsers: User[] = data.filter((user) => user.disqualified);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    setSelectedUsers(selectAll ? [] : data);
  };

  const handleUserSelectChange = (user: User) => {
    const selectedIndex = selectedUsers.indexOf(user);
    if (selectedIndex === -1) {
      setSelectedUsers([...selectedUsers, user]);
    } else {
      const updatedSelectedUsers = [...selectedUsers];
      updatedSelectedUsers.splice(selectedIndex, 1);
      setSelectedUsers(updatedSelectedUsers);
    }
  };

  const filteredUsers = data.filter((user) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(lowerCaseSearchQuery) ||
      user.lastName.toLowerCase().includes(lowerCaseSearchQuery) ||
      user.school.toLowerCase().includes(lowerCaseSearchQuery) ||
      user.experience.toLowerCase().includes(lowerCaseSearchQuery) ||
      user.hashtags.some((tag) =>
        tag.toLowerCase().includes(lowerCaseSearchQuery)
      )
    );
  });

  return (
    <div className="home">
      <div className="nav">
        {/* Pass the 'opportunity' array directly from this file */}
        <HomeNav opportunity={opportunity} />
      </div>
      <div className="container">
        <div className="main c_flex">
          <div className="side">
            <SideFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="table">
            <HomeList
              selectAll={selectAll}
              selectedUsers={selectedUsers}
              filteredUsers={filteredUsers}
              handleSelectAllChange={handleSelectAllChange}
              handleUserSelectChange={handleUserSelectChange}
              qualifiedUsers={qualifiedUsers}
              disqualifiedUsers={disqualifiedUsers}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
