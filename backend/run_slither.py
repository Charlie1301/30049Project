import subprocess

def run_slither(command):
  
  try:

    result = subprocess.run(command, text=True, capture_output=True, check=True)
    return result.stdout

  except subprocess.CalledProcessError as e:

    return (f"Command '{' '.join(command)}' failed with error:\n", e)

  except Exception as e:

    return ("An error occurred:", e)


def main():
  # List of commands to run
  commands = [['solc-select install 0.8.4'], ['solc-select use 0.8.4'], ['slither Sample.sol --checklist > ./result.md']]

  return_array = []

  for cmd in commands:
    return_array.append(run_slither(cmd))

  return return_array

main()

