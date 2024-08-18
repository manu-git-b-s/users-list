import { Container, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center align-items-end">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Users Management</h1>
          <p className="text-center mb-4">
            This is a MERN stack application with JWT authentication to display
            and manage users.
          </p>
          {userInfo.email ? (
            <div className="d-flex">
              <Button variant="primary" href="/login" className="me-3">
                Sign In
              </Button>
              <Button variant="secondary" href="/register">
                Register
              </Button>
            </div>
          ) : null}
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
