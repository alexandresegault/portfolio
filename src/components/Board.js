import React from "react";
import "./Board.css";
import ProjectCard from "./ProjectCard";
import ImgProjectCocktail from "../Image/photoProjetCocktail.png";
import ImgProjectFrog from "../Image/projetFroggy.png";
import ImgProjectWar from "../Image/warProject.png";
import ImgCalculator from "../Image/calculatorProject.png";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cocktail: false, frog: false, war: false, calc: false };
    this.cocktailVisible = this.cocktailVisible.bind(this);
    this.frogVisible = this.frogVisible.bind(this);
    this.warVisible = this.warVisible.bind(this);
    this.calcVisible = this.calcVisible.bind(this);
  }
  cocktailVisible() {
    this.setState({ cocktail: !this.state.cocktail });
  }
  frogVisible() {
    this.setState({ frog: !this.state.frog });
  }
  warVisible() {
    this.setState({ war: !this.state.war });
  }
  calcVisible() {
    this.setState({ calc: !this.state.calc });
  }
  render() {
    return (
      <div className="board">
        <div className="cocktail" onClick={this.cocktailVisible}>
          <ProjectCard
            name="Shake it Yourself"
            img={ImgProjectCocktail}
            class="cocktailProject"
            thumbstack="cocktailThumbstack"
          />
          <ul className={this.state.cocktail ? "visible" : "invisible"}>
            <li>Projet de groupe</li>
            <li>Réalisé en HTML, CSS et JavaScript</li>
            <li>Objectif ? </li>
            <li>
              Trouver des recettes de cocktails en fonction d'ingrédients
              choisis
            </li>
            <li>
              <a
                href="https://gijix.github.io/CodeMeMore-project-1-Cocktail/"
                target="blank"
              >
                Lien vers le Site
              </a>
            </li>
          </ul>
        </div>
        <div className="froggy" onClick={this.frogVisible}>
          <ProjectCard
            name="Save My FroggyDays"
            img={ImgProjectFrog}
            class="frogProject"
            thumbstack="frogThumbstack"
          />
          <ul className={this.state.frog ? "visible" : "invisible"}>
            <li>Projet de groupe toujours en cours</li>
            <li>Réalisé en HTML, CSS, JavaScript et React.js</li>
            <li>Consommation de 2 REST API</li>
            <li>Objectif ? </li>
            <li>Trouver des activités touristiques en fonction de la météo</li>
            <li>
              <a
                href="https://github.com/WildCodeSchool/remote-js-202011-froggy-devs"
                target="blank"
              >
                Lien vers le Github
              </a>
            </li>
          </ul>
        </div>
        <div className="war" onClick={this.warVisible}>
          <ProjectCard
            name="The War"
            img={ImgProjectWar}
            class="warProject"
            thumbstack="warThumbstack"
          />
          <ul className={this.state.war ? "visible" : "invisible"}>
            <li>Projet solo</li>
            <li>Réalisé en HTML, CSS et JavaScript</li>
            <li>Objectif ? </li>
            <li>Jouer à la bataille contre l'ordinateur</li>
            <li>
              <a
                href="https://alexandresegault.github.io/warGame/"
                target="blank"
              >
                Envie de jouer ?
              </a>
            </li>
          </ul>
        </div>
        <div className="calculator" onClick={this.calcVisible}>
          <ProjectCard
            name="Calculator"
            img={ImgCalculator}
            class="calcProject"
            thumbstack="calcThumbstack"
          />
          <ul className={this.state.calc ? "visible" : "invisible"}>
            <li>Projet solo</li>
            <li>Réalisé en HTML, CSS, JavaScript et React.js</li>
            <li>Objectif ? </li>
            <li>Reproduire une mini calculette fonctionnelle</li>
            <li>
              <a
                href="https://alexandresegault.github.io/calculatrice/"
                target="blank"
              >
                Besoin de calculer ?
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Board;
