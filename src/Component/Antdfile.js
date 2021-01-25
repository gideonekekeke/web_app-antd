import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Body from "./Body";
import Down from "./Down";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const { Header, Footer, Sider, Content } = Layout;
function Antdfile() {
  const fadeLeft = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <Layout>
          <Header
            style={{
              position: "sticky",
              zIndex: "10",
              top: 0,
            }}
          >
            <Navbar />
          </Header>
          <motion.Content
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 4 }}
          >
            <Body />
          </motion.Content>
          <Footer style={{ marginTop: "600px", backgroundColor: "#001529" }}>
            <Down />
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Antdfile;
