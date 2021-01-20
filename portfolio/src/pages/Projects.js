import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import Project from '../components/Project';

// import images for apps
import gitItDoneImage from '../assets/image/gitItDoneImage.png';
import agilePeakImage from '../assets/image/agilePeakImage.png';
import bookSearchImage from '../assets/image/bookSearchImage.png';
import budgetTrackerImage from '../assets/image/budgetTrackerImage.png';
import noteTakerImage from '../assets/image/noteTaker.png';
import jumpyManImage from '../assets/image/jumpyManImage.png';

function Projects() {
  const projects = [
    {
      "title": "Agile Peak",
      "description": "A classic text adventure game.",
      "key": "agile-peak",
      "imageSrc": agilePeakImage,
      "repository": "https://github.com/2JakesAndAJackie/agile-peak-game",
      "deployed_app": "https://agile-peak-21122.herokuapp.com/login"
    },
    {
      "title": "Jumpy Man",
      "description": "A browser game, reminicent of the old arcades.",
      "key": "jump-man",
      "imageSrc": jumpyManImage,
      "repository": "https://github.com/FullmerJake/PlayingAndGaming",
      "deployed_app": "https://jakesquaredandacharles.github.io/PlayingAndGaming/"
    },
    {
      "title": "Git It Done",
      "description": "A search engine to find git issues to work on.",
      "key": "git-it-done",
      "imageSrc": gitItDoneImage,
      "repository": "https://github.com/FullmerJake/git-it-done",
      "deployed_app": "https://fullmerjake.github.io/git-it-done/"
    },
    {
      "title": "Budget Tracker",
      "description": "A basic PWA for tracking a budget",
      "key": "budget-tracker",
      "imageSrc": budgetTrackerImage,
      "repository": "https://github.com/FullmerJake/budget-tracker",
      "deployed_app": "https://limitless-bastion-99274.herokuapp.com/"
    },
    {
      "title": "Book Search Engine",
      "description": "An application to help you plan your next book and adventure.",
      "key": "book-search",
      "imageSrc": bookSearchImage,
      "repository": "https://github.com/FullmerJake/Book-Search-Engine",
      "deployed_app": "https://salty-forest-30767.herokuapp.com/"
    },
    {
      "title": "Note Taker",
      "description": "A simple note taking application.",
      "key": "note-taker",
      "imageSrc": noteTakerImage,
      "repository": "https://github.com/FullmerJake/note-taker",
      "deployed_app": "https://guarded-escarpment-16875.herokuapp.com/"
    }
  ]
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Recent Projects</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="p-3 ">
        <Row>
          {projects.map((project) => {
            return(
              <Col s={12} lg={6} key={project.key}>
                <Project project={project} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Projects;