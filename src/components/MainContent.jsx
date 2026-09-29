import React from "react";
export default class MainContent extends React.Component {
    render() {
        return <main className="main-content" id="main-content">
        {/* implement MainContent component -->*/}
        <div className="card-row">
          <div className="card" id="main-card">
            {/*<!-- TODO - implement MainCard component -->*/}
            <div className="card-title">First Card Title</div>
            <div className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium, massa eu pretium vestibulum, enim nulla cursus massa, ullamcorper dictum nisi nisi nec odio.
            </div>
          </div>
          <div className="card">
            {/*<!-- TODO - apply MainCard component -->*/}
            <div className="card-title">Second Card Title</div>
            <div className="card-content">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget velit vitae neque pretium feugiat.
            </div>
          </div>
          <div className="card">
            {/*<!-- TODO - apply MainCard component -->*/}
            <div className="card-title">Third Card Title</div>
            <div className="card-content">
              Quisque facilisis urna a massa varius, a feugiat massa consectetur. Curabitur rutrum nunc vitae velit convallis, nec luctus mi cursus.
            </div>
          </div>
        </div>
      </main>
    }
}