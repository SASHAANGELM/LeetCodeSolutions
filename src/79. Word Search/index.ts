interface Point {
  x: number;
  y: number;
}

function isPointsNear({ x: x1, y: y1 }: Point, { x: x2, y: y2 }: Point): boolean {
  if (x1 - 1 === x2 && y1 === y2) return true; // Second point is on the left
  if (x1 + 1 === x2 && y1 === y2) return true; // Second point is on the right
  if (x1 === x2 && y1 - 1 === y2) return true; // Second point is on the top
  if (x1 === x2 && y1 + 1 === y2) return true; // Second point is on the bottom
  return false;
}

function getPointsMap(board: string[][]): Map<string, Point[]> {
  const pointsMap = new Map<string, Point[]>();

  for (let y = 0; y < board.length; y++) {
    const row = board[y];
    for (let x = 0; x < row.length; x++) {
      const item = row[x];
      const points = pointsMap.get(item) ?? [];
      points.push({ x, y });
      pointsMap.set(item, points);
    }
  }

  return pointsMap;
}

function findPath(pointsMap: Map<string, Point[]>, path: Point[], target: string[]): Point[] {
  if (target.length > 0) {
    const routes = pointsMap.get(target[0]) ?? [];
    const lastRoute = path.length > 0 ? path[path.length - 1] : null;
    const validRoutes = routes.filter((route) => {
      if (lastRoute != null && !isPointsNear(lastRoute, route)) return false;
      return !path.some((p) => {
        return p.x === route.x && p.y === route.y;
      });
    });
    if (validRoutes.length === 0) return [];

    if (target.length === 1 && validRoutes.length > 0) {
      return [...path, validRoutes[0]];
    }

    for (const route of validRoutes) {
      const fullPath = findPath(pointsMap, [...path, route], [...target.slice(1)]);
      if (fullPath.length > 0) return fullPath;
    }
  }
  return [];
}

export function exist(board: string[][], word: string): boolean {
  const wordArray = word.split('');
  if (wordArray.length === 0) return false;

  const pointsMap = getPointsMap(board);
  if (wordArray.length === 1 && pointsMap.has(word[0])) return true;

  const path = findPath(pointsMap, [], wordArray);
  return path.length === wordArray.length;
}
