// Write a function compareRobots that takes two robots (and their starting memory).
// It should generate 100 tasks and let both of the robots solve each of these tasks.
// When done, it should output the average number of steps each robot took per task.

// For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.

function compareRobots(robot1, memory1, robot2, memory2) {}

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

compareRobots(routesRobot, [], goalOrientedRobot, []);
