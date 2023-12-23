import React, { useState } from "react";
import filterIcon from "../../public/Assets/Tuning.svg";
import downIcon from "../../public/Assets/Down.svg";
import Image from "next/image";

export default function NavBar(props) {
  const [toggleFilter, settoggleFilter] = useState(false);

  function handleDisplayToggle(e) {
    settoggleFilter(!toggleFilter);
    if (e.target.value !== undefined) {
      props.handleGroupValue(e.target.value);
    }
  }
  function handleOrderingValue(e) {
    settoggleFilter(!toggleFilter);
    if (e.target.value !== undefined) {
      props.handleOrderValue(e.target.value);
    }
  }

  return (
    <>
      <section className="shadow-sm">
        <div className="m-auto p-5">
          <div>
            <div
              className="flex item-center p-2 border w-32"
              onClick={handleDisplayToggle}
            >
              <div className="flex items-center mr-3">
                <Image src={filterIcon} height={30} alt="icon" />
              </div>
              <div className="text-md">Display</div>
              <div className="flex items-center mr-3">
                <Image src={downIcon} height={30} alt="icon" />
              </div>
            </div>
            <div
              className={
                toggleFilter
                  ? "nav-disp-dropdown nav-disp-dropdown-show"
                  : "nav-disp-dropdown"
              }
            >
              <div className="nav-disp-filters">
                <div className="nav-dropdown-category">Grouping</div>
                <div className="nav-dropdown-selector">
                  <select
                    value={props.groupValue}
                    onChange={handleDisplayToggle}
                    className="nav-selector"
                    name="grouping"
                    id=""
                  >
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
              </div>
              <div className="nav-disp-filters">
                <div className="nav-dropdown-category">Ordering</div>
                <div className="nav-dropdown-selector">
                  <select
                    value={props.orderValue}
                    onChange={handleOrderingValue}
                    className="nav-selector"
                    name="grouping"
                    id=""
                  >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
