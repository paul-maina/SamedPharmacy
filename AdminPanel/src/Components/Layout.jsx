import React from 'react';
import Grid from "./Dashboard/Grid";

function Layout({ activePage }) {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-bold">{activePage}</h1>

      {activePage === "Dashboard" && <Grid/>}
      {activePage === "Products" && <div>Products content</div>}
      {activePage === "Orders" && <div>Orders content</div>}
      {activePage === "Settings" && <div>Settings content</div>}
      {activePage === "Help" && <div>Help content</div>}
    </main>
  );
}

export default Layout;