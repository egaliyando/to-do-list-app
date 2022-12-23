import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createToDo, deleteToDo, fetchToDo } from 'features/Dashboard/actions';
import Plus from 'assets/icons/Plus';
import Card from 'components/Card';
import Layout from 'components/Layout';
import Alert from 'components/Alert';
import Toast from 'components/Toast';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector(({ dashboard }) => dashboard);
  const [singleData, setSingleData] = React.useState(null);
  const [isDeleted, setIsDeleted] = React.useState(false);

  const removeTodoAPI = () => {
    dispatch(deleteToDo(`activity-groups/${singleData.id}`));
    setIsDeleted(true);
    setTimeout(() => {
      setIsDeleted(false);
    }, 1500);
  };

  const createTodoAPI = () => {
    let payload = {
      title: 'New Activity',
      email: 'aaliyando12@gmail.com',
    };
    dispatch(createToDo(payload));
  };

  const goToDetailActivity = (id) => {
    navigate(`activity?id=${id}`);
  };

  React.useEffect(() => {
    dispatch(fetchToDo());
  }, [dispatch]);

  return (
    <Layout>
      <div className="flex justify-between items-center my-10">
        <p className="font-bold text-2xl">Activity</p>

        <button
          onClick={createTodoAPI}
          className="btn btn-primary font-semibold bg-[#16ABF8] hover:bg-[#25b6ff] border-none rounded-full"
        >
          <span className="px-2 flex items-center">
            <Plus classname="mr-2" /> Tambah
          </span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {store.data.map((items, index) => {
          return (
            <Card
              key={index}
              items={items}
              status={store.status}
              onClick={() => setSingleData(items)}
              goToDetail={() => goToDetailActivity(items.id)}
            />
          );
        })}
      </div>
      <Alert onConfirm={removeTodoAPI} content={singleData} />
      <Toast show={isDeleted} label="Activity berhasil dihapus" />
    </Layout>
  );
}

export default Dashboard;
