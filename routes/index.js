import APIUsers from './api/users';
import APILessons from './api/lessons';

const Index = {
    method: ['GET', 'POST'],
    path: '/',
    config: {
        handler: function(request, reply) {
            return reply.view('index');
        }
    }
};

const Users = {
    method: ['GET', 'POST'],
    path: '/users',
    config: {
        handler: function(request, reply) {
            return reply.view('users');
        }
    }
};

const Lessons = {
    method: ['GET', 'POST'],
    path: '/lessons',
    config: {
        handler: function(request, reply) {
            return reply.view('lessons');
        }
    }
};

const Public = {
    method: "GET",
    path: "/public/{path*}",
    handler: {
       directory: {
            path: "./public",
            listing: false,
            index: false
       }       
    }
};
const Routes = [].concat(
    Public,
    Index,
    Users,
    APIUsers,
    Lessons,
    APILessons
);
export default Routes;
