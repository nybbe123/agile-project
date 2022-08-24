import { LinkedIn, Facebook, Instagram, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <div
      style={{
        background: "skyblue",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div className="address">
        <h5 style={{ fontSize: "1.1rem", margin: "0 0 10px 0" }}>Address</h5>
        <h6 style={{ fontSize: "1rem", margin: "0" }}>
          Medieinstitutet Göteborg
        </h6>
        <p style={{ margin: ".3rem 0" }}>Anders Personsgatan 18</p>
        <p style={{ margin: ".3rem 0" }}>416 64 Göteborg</p>
        <p style={{ margin: 0 }}>031-83 28 31</p>
      </div>

      {/* this is to fit the space-around, in case any extra thing will be planned later */}
      <div className="social-media">
        <h5 style={{ fontSize: "1.1rem", margin: "0 0 10px 0" }}>Find Us</h5>
        <div style={{ display: "flex", flexDirection: "row", gap: ".3rem" }}>
          <Facebook fontSize="large" />
          <Instagram fontSize="large" />
          <LinkedIn fontSize="large" />
          <Email fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
