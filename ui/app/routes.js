// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'dashboardPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/DashboardPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'apiDemo',
      name: 'apiDemoPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/ApidemoPage/reducer'),
          System.import('containers/ComponentDemos/ApidemoPage/sagas'),
          System.import('containers/ComponentDemos/ApidemoPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('apidemo', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'imageGallery',
      name: 'imageGalleryPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/PhotoImage/ImageGalleryPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'autoComplete',
      name: 'autoCompletePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/FormElements/AutoCompletePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'buttons',
      name: 'buttonsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/FormElements/ButtonsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'card',
      name: 'cardPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/CardPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'icons',
      name: 'iconsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/IconsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'dialog',
      name: 'dialogPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/DialogPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'datePicker',
      name: 'datePickerPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/FormElements/DatePickerPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'textField',
      name: 'textFieldPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/FormElements/TextFieldPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'timePicker',
      name: 'timePickerPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/FormElements/TimePickerPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'select',
      name: 'selectPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/FormElements/SelectPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'switches',
      name: 'switchesPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/FormElements/SwitchesPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'lineChart',
      name: 'lineChartPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/Charts/LineChartPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'barChart',
      name: 'barChartPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/Charts/BarChartPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'pieChart',
      name: 'pieChartPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/Charts/PieChartPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'form',
      name: 'formPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/FormPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'table',
      name: 'tablePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ComponentDemos/TablePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'login',
      name: 'loginPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
