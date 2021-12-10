import Matter from 'matter-js';

const Physics  = (entities, {touches , time, dispatch}) => {
    // touches for taking record of the touches on the screen
    // time for the time stamp of the last recorded position of the Bird
    // dispatch for dispatching the information to the Game Engine

    let engine = entities.physics.engine;

    touches.filter(t => t.type === "press")
    .forEach(t => {
        Matter.Body.setVelocity(entities.Bird.body, {
            x: 0,
            y: -8,
        })
    });

    Matter.Engine.update(engine, time.delta);

    return entities;
}

export default Physics;