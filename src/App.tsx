import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#1E1E1E",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          component={motion.h1}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: "bold",
            letterSpacing: "0.1em",
          }}
        >
          Wmil House
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: `url("https://i.imgur.com/UjsCq1L.jpeg")`,
          minHeight: "500px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
          padding: 4,
        }}
      >
        <Typography
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: 2,
            borderRadius: 1,
            fontSize: 30,
          }}
        >
          Welcome to Wmil House
        </Typography>
      </Box>

      <Box
        sx={{
          height: "1000px",
          background: "#FAAF63",
          fontSize: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#1E1E1E",
          padding: 4,
        }}
      >
        <Typography
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{ marginBottom: 2 }}
        >
          Something here Something here
        </Typography>
        <Typography
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{ marginBottom: 2 }}
        >
          Something here Something here Something here
        </Typography>
        <Typography
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Something here Something hereSomething hereSomething hereSomething
          here Something here
        </Typography>
      </Box>
    </>
  );
}

export default App;
