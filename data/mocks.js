import casual from "casual";

/* 
Looks like, mocks works the way like that:
When we require the object of type declared in mocks, the system authomatically generates an object filled with values accorting to definition in 
const mocks below
*/
const mocks = {
  String: () => 'It works!',
  Query: () => ({
    author: (root, args) => {
      return { firstName: args.firstName, lastName: args.lastName };
    },
  }),
  Author: () => ({ firstName: () => casual.first_name, lastName: () => casual.last_name }),
  Post: () => ({ title: casual.title, text: casual.sentences(3) }),
};

export default mocks;
