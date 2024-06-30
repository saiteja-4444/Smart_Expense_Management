import matplotlib.pyplot as plt
import numpy as np

y = np.array([4000, 5000, 3000, 2000])
mylabels = ["Food", "Room Rent", "vehicle", "Electronic "]

plt.pie(y, labels = mylabels)
plt.legend()
plt.show()