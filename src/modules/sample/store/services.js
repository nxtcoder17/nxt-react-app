const sampleServices = {};

sampleServices.fetchData = async (actions, _payload) => {
  setTimeout(() => {
    actions.setData({ name: 'Anshuman', email: 'nxtcoder17@gmail.com' });
  }, 3000);
};

export default sampleServices;
