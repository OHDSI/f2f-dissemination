import { services } from 'services/api';

function get(id) {
  return services.users.get(id);
}

export default {
  get,
};