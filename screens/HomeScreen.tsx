import pins from '../assets/data/pins';
import PostsList from '../components/PostsList';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <PostsList posts={pins} />
  );
}
