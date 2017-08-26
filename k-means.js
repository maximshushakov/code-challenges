function classify(items, centroids, filter = null) {
  const clusters = centroids.map(() => []);

  items.forEach(item => {
    const distances = centroids.map(centroid => Math.abs(item - centroid));
    const cluster_index = distances.indexOf(Math.min(...distances));

    clusters[(filter) ? filter(cluster_index, item) : cluster_index].push(item);
  });
  
  return clusters;
}

function mean(items) {
  if (!items.length) return null;
  return items.reduce((sum, item) => sum + item, 0) / items.length;
}

function kmeans(data, centroids, iterations = Number.MAX_VALUE, filter = null) {
  let clusters = null, moved = false;
  
  do {
    clusters = classify(data, centroids, filter);
    for (let i = 0, m; i < clusters.length; i++) {
      cluster_mean = mean(clusters[i]);
      if (centroids[i] !== cluster_mean) {
        centroids[i] = cluster_mean;
        moved = true;
        continue;
      }
      moved = false;
    }
  }
  while (iterations-- && moved)

  return { clusters: clusters, centroids: centroids }
}

module.exports = { classify, mean, kmeans }

//filter example: (index, item) => (index === 2 && item[0] === '1') ? 1 : index