let startTime, endTime;

let vals = [50.58, 62.29, 12.28, 30.99, 17.3, 7.59, 92.51, 91.65, 85.64, 19.33, 25.14, 47.84, 35.07, 74.53, 42.16, 39.87, 79.86, 28.79, 94.35, 46.94, 48.01, 3.2, 28.95, 58.39, 51.49, 10.37, 13.14, 42.19, 33.85, 71.41, 88.86, 7.11, 92.0, 40.56, 84.72, 63.52, 14.2, 28.2, 48.59, 78.96, 79.59, 29.78, 71.58, 94.84, 80.78, 8.51, 83.34, 73.06, 28.57, 66.44, 19.31, 41.19, 94.43, 75.39, 11.88, 89.04, 97.2, 19.95, 54.07, 22.67, 41.83, 44.29, 95.43, 58.26, 51.97, 67.83, 39.83, 99.79, 55.67, 57.72, 72.56, 34.08, 22.46, 44.94, 19.19, 10.81, 84.81, 82.07, 48.23, 8.27, 90.31, 53.65, 0.35, 2.83, 6.76, 27.49, 57.73, 80.65, 61.01, 12.93, 51.33, 68.11, 86.27, 77.99, 44.95, 30.83, 84.9, 6.75, 54.9, 0.69, 33.87, 38.27, 83.38, 11.27, 40.76, 22.59, 70.99, 67.54, 92.2, 28.45, 84.5, 43.57, 53.73, 2.56, 0.22, 67.53, 0.7, 65.12, 53.59, 15.53, 60.68, 57.21, 50.65, 88.61, 75.16, 12.63, 51.67, 10.74, 31.72, 99.61, 8.09, 4.09, 28.87, 97.11, 30.7, 55.23, 76.18, 95.18, 64.9, 97.36, 16.64, 10.22, 52.53, 43.82, 98.48, 20.54, 78.62, 68.46, 11.11, 79.14, 75.0, 4.52, 26.9, 64.36, 31.15, 26.37, 61.7, 31.76, 82.71, 15.45, 0.41, 39.11, 55.22, 19.87, 51.39, 59.13, 37.89, 15.34, 65.69, 47.71, 43.17, 56.29, 37.61, 79.27, 65.5, 28.99, 89.14, 5.41, 24.12, 12.17, 4.01, 42.08, 85.88, 86.21, 84.57, 36.06, 83.74, 90.34, 95.96, 9.27, 28.12, 73.98, 73.63, 37.9, 50.05, 46.66, 53.69, 88.52, 10.71, 85.26, 11.35, 32.16, 23.28, 41.11, 63.11, 94.78, 10.18, 13.61, 37.0, 74.78, 17.26, 5.28, 67.84, 94.99, 3.59, 54.33, 93.06, 37.48, 38.96, 99.77, 40.5, 49.18, 60.34, 4.33, 22.61, 74.45, 95.39, 88.86, 83.17, 59.65, 41.81, 93.17, 13.82, 88.12, 22.07, 6.61, 36.65, 12.7, 33.71, 50.16, 97.23, 31.51, 59.81, 32.76, 48.48, 29.08, 13.19, 51.3, 83.62, 47.64, 33.6, 50.15, 59.63, 26.62, 50.93, 66.21, 93.07, 17.95, 89.5, 68.49, 52.91, 90.6, 32.23, 38.66, 93.18, 8.45, 97.95, 16.0, 75.01, 10.09, 22.44, 18.61, 45.62, 67.19, 40.85, 50.35, 40.71, 49.31, 95.88, 49.54, 19.45, 1.01, 62.46, 97.85, 7.73, 2.56, 52.73, 10.07, 13.54, 30.92, 2.74, 46.4, 55.31, 4.68, 45.4, 56.0, 64.48, 68.62, 59.89, 39.66, 13.94, 80.8, 48.47, 93.42, 71.64, 10.63, 78.6, 53.15, 80.51, 10.77, 12.87, 63.24, 40.37, 42.9, 6.1, 41.87, 72.07, 59.73, 2.28, 75.65, 72.19, 62.54, 2.31, 41.34, 29.29, 74.99, 68.76, 89.87, 7.65, 66.55, 34.21, 60.48, 0.38, 24.26, 62.72, 98.48, 71.84, 95.95, 13.48, 59.73, 63.11, 46.73, 89.33, 29.14, 40.33, 63.53, 10.79, 83.69, 0.3, 28.24, 86.18, 99.59, 15.2, 1.91, 97.06, 51.8, 4.63, 31.44, 84.45, 1.33, 22.29, 22.52, 30.91, 63.58, 65.31, 12.95, 40.31, 43.82, 78.8, 82.78, 46.47, 25.44, 53.63, 71.99, 49.0, 40.86, 5.82, 94.92, 47.4, 17.94, 23.09, 46.27, 28.74, 81.27, 23.7, 17.16, 45.08, 90.76, 75.6, 34.84, 53.83, 76.95, 45.67, 9.65, 44.51, 64.6, 74.11, 84.93, 87.97, 92.28, 59.87, 32.91, 31.05, 55.87, 20.76, 44.68, 66.36, 6.57, 13.79, 56.47, 47.29, 57.91, 52.35, 82.38, 32.49, 98.07, 55.73, 9.32, 4.22, 51.04, 92.39, 98.83, 26.07, 86.29, 95.14, 90.78, 6.19, 56.67, 67.58, 88.67, 60.02, 78.9, 90.49, 15.16, 38.07, 14.65, 61.02, 87.33, 46.58, 26.6, 59.81, 46.02, 19.84, 39.56, 43.52, 8.19, 38.31, 90.49, 77.57, 91.82, 17.32, 77.18, 59.04, 61.75, 51.37, 79.65, 19.28, 3.1, 45.31, 72.71, 89.4, 74.95, 79.28, 2.22, 70.57, 67.0, 34.02, 24.85, 26.17, 66.16, 80.18, 78.69, 27.97, 74.01, 11.89, 84.76, 11.56, 57.23, 9.97, 13.87, 86.1, 34.7, 74.57, 83.67, 35.89, 55.11, 26.44, 58.68, 71.52, 92.8, 78.0, 68.99, 2.08, 71.62, 89.84, 72.58, 74.12, 37.25, 59.55, 79.32, 61.1, 53.11, 17.29, 30.47, 35.89, 22.12, 38.72, 74.63, 51.84, 78.33, 75.98, 63.26, 13.11, 40.67, 64.55, 89.47, 44.06, 22.05, 32.43, 55.72, 61.02, 14.97, 1.15, 93.79, 55.75, 47.46, 14.53, 57.72, 36.27, 12.94, 51.86, 18.5, 76.28, 90.34, 35.44, 42.03, 87.6, 48.45, 5.04, 21.56, 25.23, 5.49, 28.13, 92.9, 8.21, 83.29, 74.92, 16.97, 37.62, 29.52, 13.8, 71.11, 80.91, 36.52, 61.36, 67.63, 70.3, 89.95, 20.69, 74.54, 38.03, 58.26, 5.41, 14.6, 58.73, 35.36, 6.43, 95.05, 7.03, 33.42, 13.54, 75.48, 47.39, 51.6, 62.96, 31.89, 1.78, 19.97, 49.34, 63.79, 67.84, 2.98, 96.39, 28.69, 20.54, 15.63, 21.13, 80.63, 30.51, 50.18, 55.52, 72.16, 52.19, 11.85, 18.56, 12.63, 44.99, 27.66, 97.13, 27.1, 8.32, 77.78, 82.38, 70.23, 8.64, 24.37, 3.34, 93.88, 58.75, 90.38, 62.96, 77.3, 61.79, 62.85, 84.24, 96.08, 58.28, 3.94, 98.79, 72.17, 96.82, 57.36, 29.67, 69.9, 66.73, 47.43, 67.0, 52.86, 41.34, 58.88, 42.99, 24.89, 29.87, 97.35, 94.31, 73.84, 70.34, 8.62, 11.2, 36.71, 48.86, 56.55, 44.68, 62.61, 97.52, 13.35, 89.44, 53.46, 42.62, 49.85, 62.12, 94.27, 58.37, 72.11, 36.43, 44.09, 75.64, 92.79, 16.61, 64.75, 95.15, 22.7, 99.38, 40.89, 73.01, 91.6, 22.58, 31.87, 43.8, 89.25, 35.65, 55.97, 27.15, 19.42, 72.27, 33.73, 28.64, 26.18, 92.89, 71.68, 19.17, 5.15, 37.03, 42.65, 91.7, 81.04, 80.16, 40.02, 51.35, 11.24, 69.26, 50.23, 42.73, 84.78, 9.06, 19.28, 60.34, 76.62, 27.33, 32.43, 41.37, 80.65, 99.99, 48.13, 92.09, 62.24, 39.97, 17.95, 20.28, 98.59, 59.91, 38.08, 4.65, 90.34, 49.3, 45.35, 57.5, 12.43, 87.06, 93.25, 92.25, 18.26, 57.29, 90.13, 87.47, 30.05, 38.62, 80.01, 33.09, 54.49, 55.29, 15.27, 40.11, 20.41, 31.1, 8.08, 69.35, 98.82, 84.23, 84.96, 76.71, 10.99, 63.1, 57.61, 65.29, 70.54, 30.6, 89.7, 56.33, 15.3, 79.65, 25.66, 75.62, 22.98, 67.53, 23.38, 46.37, 56.33, 58.11, 54.0, 33.48, 79.03, 89.1, 74.62, 1.15, 18.86, 96.81, 37.71, 47.89, 23.45, 51.94, 58.8, 77.84, 82.17, 17.96, 35.06, 71.17, 73.65, 26.49, 44.94, 16.65, 49.61, 72.13, 66.76, 6.76, 36.03, 11.36, 3.02, 63.61, 79.08, 83.76, 67.3, 45.4, 61.48, 4.78, 58.08, 35.88, 38.19, 83.82, 67.07, 84.93, 94.26, 60.7, 8.42, 70.52, 59.28, 36.53, 8.63, 8.58, 4.23, 64.42, 39.05, 95.74, 52.95, 87.76, 1.08, 43.58, 36.61, 12.76, 72.81, 47.79, 19.69, 11.2, 9.79, 49.56, 51.67, 15.56, 99.93, 77.09, 71.88, 73.99, 12.59, 2.21, 63.95, 27.8, 66.64, 83.76, 66.58, 40.4, 20.33, 70.29, 36.06, 71.65, 6.35, 6.0, 84.64, 11.27, 69.25, 37.33, 42.29, 64.6, 8.19, 22.24, 94.45, 32.85, 61.37, 46.42, 30.08, 11.16, 61.15, 45.17, 83.06, 18.6, 33.54, 99.14, 37.14, 86.43, 52.02, 32.85, 50.91, 56.93, 63.45, 38.1, 82.97, 57.39, 37.38, 68.47, 95.75, 14.68, 38.9, 4.11, 26.36, 82.18, 69.17, 48.26, 84.25, 94.71, 92.87, 5.28, 39.72, 2.16, 82.9, 60.26, 65.94, 67.32, 63.74, 7.92, 26.2, 15.32, 46.76, 17.86, 5.83, 34.91, 43.2, 29.36, 52.95, 47.13, 47.9, 88.77, 28.99, 93.41, 78.13, 86.51, 96.9, 87.35, 36.09, 13.38, 90.78, 5.26, 29.33, 96.23, 82.9, 7.31, 88.61, 70.99, 74.2, 26.76, 60.51, 33.73, 96.0, 0.56, 85.44, 18.3, 72.94, 88.31, 88.22, 55.03, 6.55, 44.1, 73.82, 88.6, 52.36, 90.03, 61.9, 78.98, 21.14, 86.79, 47.2, 73.35, 99.94, 70.7, 0.5, 7.77, 2.87, 20.47, 6.79, 28.16, 17.5, 2.51, 95.01, 28.39, 82.72, 8.56, 22.47, 51.39, 55.37, 7.74, 88.44, 84.39, 22.24, 75.62, 23.17, 71.9, 83.64, 31.73, 8.04, 40.97, 74.88, 55.6, 74.66, 40.08, 6.59, 78.39, 68.14, 96.19, 51.1, 60.55, 85.15, 72.1, 71.97, 54.98, 15.7, 93.51, 61.2, 9.53, 17.86, 94.48, 28.58, 53.38, 65.63];

startTime = new Date();

let total  = 0.0
		
for (var i = 0; i < vals.length; i++) {
	psum = 0.0

	for (x = 1.0; x <= 1000000; x++) {
	    psum += x*37.0/12347.0 + vals[i]*61.0/101.0;
	}

  total += psum/53.0;

}

console.log("Result: " + total);

endTime = new Date();
let timeDiff = (endTime - startTime)/1000;

console.log("Time elapsed : " + timeDiff + " seconds");
