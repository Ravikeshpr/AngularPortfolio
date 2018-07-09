import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  technologies: any = [];

  constructor() {
    this.technologies = [
      {
        frontImgUrl: "../../../assets/angular.png",
        name: "Angular",
        relativeExperice: "8 months",
        numberOfProjects: "2",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Nested Components",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Routing",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Lazy Loading",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Pipes and Directives",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "Modules",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "Services and Rxjs",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "Angular-CLI",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/react.png",
        name: "React",
        relativeExperice: "11 months",
        numberOfProjects: "2",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "One way data flow",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Reusable components",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Routing and Lazy Loading",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Redux (reducers,sagas)",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "Redux Middleware",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          },
          {
            name: "selectors, Recompose,children, HOC, context",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/node.png",
        name: "Nodejs",
        relativeExperice: "6 months",
        numberOfProjects: "1",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Expressjs",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Routing",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Middlewares",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "security of routes JWS tokens",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "Testing",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      },
      {
        frontImgUrl: "../../../assets/es6.png",
        name: "ES6",
        relativeExperice: "16 months",
        numberOfProjects: "2",
        details: [
          { project: "Risk Management Application" },
          {
            project:
              "Risk Mangement application for the leading bank of Australia"
          }
        ],
        concepts: [
          {
            name: "Arrow functions",
            details: " Wrote Reusable components  to be used at many positions "
          },
          {
            name: "Destructuring",
            details: " Nested Components and passing data in the hierarcy"
          },
          {
            name: "Modules",
            details: "Routing with Nav or Tabs and authentication srvice"
          },
          {
            name: "Enabling Polyfills",
            details:
              "Wrote reusable directives and used it using shared modules"
          },
          {
            name: "New Syntax",
            details:
              "Modular code to keep not dependent code not related for modularity and expandability"
          }
        ]
      }
    ];
  }

  ngOnInit() {}
}
