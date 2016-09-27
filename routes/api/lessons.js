import Joi from 'joi';

const lessons = [{
    method: 'GET',
    path: '/api/lessons',
    config: {
        handler: (request, reply) => {
            let sql = "SELECT * FROM lesson";
            request.pg.client.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                }
                let lessons = result.rows;
                return reply(lessons);
            });
        }
    }
}, {
    method: 'POST',
    path: '/api/lessons',
    config: {
        handler: (request, reply) => {
            let name = request.payload.name;
            let description = request.payload.description;
            let sql = `INSERT INTO lesson
            (name,description)
            VALUES 
            ('${name}','${description}')
            RETURNING *`;
            request.pg.client.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                }
                reply(result.rows);
            })
        },
        validate: {
            payload: Joi.object().keys({
                name: Joi.string().required().min(1).max(60),
                description: Joi.string().min(1).max(200)
            })
        }
    }
}];
export default lessons;
