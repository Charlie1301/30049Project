import subprocess

def run_slither(command):
  
  try:

    result = subprocess.run(command, text=True, capture_output=True, check=True)
    print(result.stdout)

  except subprocess.CalledProcessError as e:

    print(f"Command '{' '.join(command)}' failed with error:\n", e)

  except Exception as e:

    print("An error occurred:", e)

# List of commands to run
commands = [['solc-select install 0.8.4'], ['solc-select use 0.8.4'], ['slither Sample.sol --checklist > ./result.md']]

for cmd in commands:
  run_slither(cmd)

