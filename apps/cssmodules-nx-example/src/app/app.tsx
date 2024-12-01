// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import util from '@cssmodules-nx-example/styles/util.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <p className={styles.foo}>testing 123</p>
      <p className={util.imported}>testing 123</p>
      <NxWelcome title="cssmodules-nx-example" />
    </div>
  );
}

export default App;
