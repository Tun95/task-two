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

interface HomeListProps {
  filteredUsers: User[];
  handleSelectAllChange: () => void;
  handleUserSelectChange: (user: User) => void;
  qualifiedUsers: User[];
  disqualifiedUsers: User[];
  selectAll: boolean;
  selectedUsers: User[];
}

function HomeList(props: HomeListProps) {
  return (
    <div className="home_list">
      <div className="content">
        <div className="header">
          <ul className="f_flex">
            <li className="a_flex">
              <input
                type="checkbox"
                className="checkbox"
                checked={props.selectAll}
                onChange={props.handleSelectAllChange}
              />
              <span className="candidates a_flex">
                {props.filteredUsers.length} <span> Candidates</span>
              </span>
            </li>
            <li>
              <ul className="f_flex">
                <li>
                  <span className="qualified">Qualified</span>
                </li>
                <li>
                  <span className="task a_flex">
                    Task{" "}
                    <small className="value">
                      {
                        props.filteredUsers.filter((user) => user.qualified)
                          .length
                      }
                    </small>
                  </span>
                </li>
                <li>
                  <span className="disqualified a_flex">
                    Disqualified{" "}
                    <small className="value">
                      {
                        props.filteredUsers.filter((user) => user.disqualified)
                          .length
                      }
                    </small>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="items">
          {props.filteredUsers.map((user, index) => (
            <div key={index} className="list a_flex">
              <div className="check">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={props.selectedUsers.includes(user)}
                  onChange={() => props.handleUserSelectChange(user)}
                />
              </div>
              <div className="shortname b_flex">
                <div className="text">
                  <h1>{`${user.lastName.charAt(0)}${user.firstName.charAt(
                    0
                  )}`}</h1>
                </div>
              </div>
              <div className="info">
                <h2>
                  {user.lastName}&#160;
                  {user.firstName}
                </h2>
                <span className="location">{user.location}</span>
                <span className="school">{user.school}</span>
                <small className="hashtags">
                  {user.hashtags.map((hashtag, i) => (
                    <span key={i}>{hashtag}&#160;&#160;</span>
                  ))}
                </small>
                <small className="tags">
                  {user.tags.map((tag, i) => (
                    <span key={i}>{tag}&#160;&#160;</span>
                  ))}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeList;
