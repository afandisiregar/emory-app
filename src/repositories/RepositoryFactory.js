import UserRepository from './UserRepository';
import LoginRepository from './LoginRepository';

const repositories = {
    'user': UserRepository,
    'login': LoginRepository
}
export default {
    get: name => repositories[name]
};