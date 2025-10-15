import numpy
as np
import matplotlib.pyplot as plt

# Given data
e_degrees = np.array([27, 39, 50, 55, 69])  # Emergence angles in degrees
d_cm = np.array([1.1, 1.6, 2.4, 3.1, 4.0])  # Displacement in cm

# Convert e to sin(e)
sin_e = np.sin(np.radians(e_degrees))

# Perform linear regression to find slope and intercept
slope, intercept = np.polyfit(sin_e, d_cm, 1)

# Generate line for plotting
sin_e_line = np.linspace(min(sin_e), max(sin_e), 100)
d_fit = slope * sin_e_line + intercept

# Plotting
plt.figure(figsize=(8, 5))
plt.scatter(sin_e, d_cm, color='blue', label='Experimental data')
plt.plot(sin_e_line, d_fit, color='red', linestyle='--', label=f'Best fit line\ny = {slope:.2f}x + {intercept:.2f}')
plt.title('Graph of d (cm) vs sin(e)')
plt.xlabel('sin(e)')
plt.ylabel('d (cm)')
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.show()

# Print slope and intercept
print(f"Slope: {slope:.2f} cm per unit sin(e)")
print(f"Intercept: {intercept:.2f} cm")
