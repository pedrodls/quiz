import React from "react";
import { Container } from "./Container";

export function AppFooter() {
  return (
    <footer className="py-10">
      <Container>
        <div className="m-auto w-[800px]">
          <div className="flex gap-5 m-auto mt-16  text-start items-center">
            <span className="block text-start text-gray-500 dark:text-gray-400">
              We change the way UI components  librairies are used
            </span>

            <span className="block text-gray-500 dark:text-gray-400">
              Pedro João &copy; 2024<span id="year"></span>
            </span>

            <span className="flex justify-between text-gray-600 dark:text-white">
              <a href="#" className="font-medium">
                Terms of Use & Privacy Policy
              </a>
            </span>

            <span className="block text-gray-500 dark:text-gray-400">
              Need help?{" "}
              <a
                href="#"
                className="font-semibold text-gray-600 dark:text-white"
              >
                {" "}
                Contact Us
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
