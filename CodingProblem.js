const DSA = [];
const PL = [];
const Networks = [];

function enrollStudent(subject) {
  const studentName = prompt("Enter the student's name to enroll:");
    subject.push(studentName);
      console.log(`${studentName} has been enrolled.`);
      }

      function unenrollStudent(subject) {
        if (subject.length === 0) {
            console.log("No students enrolled to unenroll.");
                return;
                  }

                    console.log("Currently enrolled students:");
                      subject.forEach((student, index) => console.log(`${index + 1}. ${student}`));

                        const studentName = prompt("Enter the student's name to unenroll:");
                          const index = subject.indexOf(studentName);
                            
                              if (index !== -1) {
                                  subject.splice(index, 1);
                                      console.log(`${studentName} has been unenrolled.`);
                                        } else {
                                            console.log("Student not found.");
                                              }
                                              }

                                              function handleSubject(subjectArray, subjectName) {
                                                let action;
                                                  do {
                                                      action = prompt(`Select an option for ${subjectName}:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit`).toUpperCase();
                                                          
                                                              switch (action) {
                                                                    case "A":
                                                                            enrollStudent(subjectArray);
                                                                                    break;
                                                                                          case "B":
                                                                                                  unenrollStudent(subjectArray);
                                                                                                          break;
                                                                                                                case "C":
                                                                                                                        return; 
                                                                                                                              case "D":
                                                                                                                                      console.log("Exiting...");
                                                                                                                                              return "EXIT";
                                                                                                                                                    default:
                                                                                                                                                            console.log("Invalid option. Please try again.");
                                                                                                                                                                }
                                                                                                                                                                  } while (action !== "D");
                                                                                                                                                                  }

                                                                                                                                                                  function main() {
                                                                                                                                                                    let exitProgram = false;

                                                                                                                                                                      while (!exitProgram) {
                                                                                                                                                                          const subjectChoice = prompt("Select the subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks").toUpperCase();
                                                                                                                                                                              switch (subjectChoice) {
                                                                                                                                                                                    case "A":
                                                                                                                                                                                            exitProgram = handleSubject(DSA, "DSA") === "EXIT";
                                                                                                                                                                                                    break;
                                                                                                                                                                                                          case "B":
                                                                                                                                                                                                                  exitProgram = handleSubject(PL, "PL") === "EXIT";
                                                                                                                                                                                                                          break;
                                                                                                                                                                                                                                case "C":
                                                                                                                                                                                                                                        exitProgram = handleSubject(Networks, "Networks") === "EXIT";
                                                                                                                                                                                                                                                break;
                                                                                                                                                                                                                                                      default:
                                                                                                                                                                                                                                                              console.log("Invalid subject choice. Please try again.");
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                      console.log("Enrolled students per subject:");
                                                                                                                                                                                                                                                                        console.log("DSA:", DSA);
                                                                                                                                                                                                                                                                          console.log("PL:", PL);
                                                                                                                                                                                                                                                                            console.log("Networks:", Networks);
                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                            main();