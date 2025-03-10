import { useParams } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

export default function SplineViewer() {
  const { id } = useParams<{ id: string }>(); // Kinyeri az ID-t az URL-ből
  const sceneUrl = `https://prod.spline.design/${id}/scene.splinecode`;

  return (
    <div>
      <Spline className="canvas" scene={sceneUrl} />
    </div>
  );
}
